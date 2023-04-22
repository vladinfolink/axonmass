import { CompiledAtomRenderThree } from './CompiledAtomRenderThree';
import { CompiledAtomRenderForceGraph } from './CompiledAtomRenderForceGraph';

const _compiledAtomViewRenderMode = {
  THREE: <CompiledAtomRenderThree />,
  FG: <CompiledAtomRenderForceGraph />
};

const compiledAtomViewRenderModeSelector: 'FG' | 'THREE'  = 'THREE'; // TODO: manage this in redux state;

export const compiledSelectedView = _compiledAtomViewRenderMode[compiledAtomViewRenderModeSelector];