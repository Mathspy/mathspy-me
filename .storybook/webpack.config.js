module.exports = (baseConfig, env, defaultConfig) => {
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  defaultConfig.module.rules[0].use[0].loader = require.resolve("babel-loader");

  // The next two lines should always reflect the config in jest-preprocess.js until Gatsby exposes its .babelrc gracefully
  // use @babel/preset-react for JSX and env (instead of staged presets)
  defaultConfig.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ];
  // use @babel/plugin-proposal-class-properties for class arrow functions
  defaultConfig.module.rules[0].use[0].options.plugins = [
    require.resolve("@babel/plugin-proposal-class-properties"),
  ];

  return defaultConfig;
};

/*
Old config
{
	presets:
	 [ [ '/home/mathy/Coding/mathspy-me/node_modules/babel-preset-env/lib/index.js',
	     [Object] ],
	   '/home/mathy/Coding/mathspy-me/node_modules/babel-preset-stage-0/lib/index.js',
	   '/home/mathy/Coding/mathspy-me/node_modules/babel-preset-react/lib/index.js' ],
	plugins:
	 [ '/home/mathy/Coding/mathspy-me/node_modules/babel-plugin-macros/dist/index.js',
	   '/home/mathy/Coding/mathspy-me/node_modules/babel-plugin-transform-regenerator/lib/index.js',
	   [ '/home/mathy/Coding/mathspy-me/node_modules/babel-plugin-transform-runtime/lib/index.js',
	     [Object] ],
	   [ '/home/mathy/Coding/mathspy-me/node_modules/babel-plugin-react-docgen/lib/index.js',
	     [Object] ] ]
}
*/
