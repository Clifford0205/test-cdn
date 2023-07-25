const fs = require('fs');
const path = require('path');

const {
	override,
	adjustStyleLoaders,
	addDecoratorsLegacy,
	disableEsLint,
} = require('customize-cra');
const { alias, aliasJest, configPaths } = require('react-app-rewire-alias');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const aliasMap = configPaths('./tsconfig.paths.json'); // or jsconfig.paths.json

module.exports = override(
	alias(aliasMap), // 使用别名
	addDecoratorsLegacy(),
	disableEsLint(),
	(config) => {
		config.optimization.splitChunks = {
			cacheGroups: { default: false },
		};
		config.optimization.runtimeChunk = false;

		return config;
	},
	(config) => {
		// 新增的部分
		if (config.mode === 'production') {
			config.output = {
				...config.output,
				filename: 'static/js/widget.js',
				path: resolveApp('../demo/public'),
			};
		}
		return config;
	},

	adjustStyleLoaders(({ use }) => {
		use.forEach((loader) => {
			if (/mini-css-extract-plugin/.test(loader.loader)) {
				loader.loader = require.resolve('style-loader');
				loader.options = {};
			}
		});
	}),
);

module.exports.jest = override(
	aliasJest(aliasMap), // 使用别名
	addDecoratorsLegacy(),
	disableEsLint(),
);
