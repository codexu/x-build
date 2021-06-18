const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext
  .keys().map(requireContext);

const req = require.context('@/assets/icons', false, /\.svg$/);

requireAll(req);
