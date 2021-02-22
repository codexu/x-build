const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('@/assets/icons', false, /\.svg$/);
requireAll(req);
