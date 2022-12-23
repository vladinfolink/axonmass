import { SingleAtomRender } from './SingleAtomRender';

export function ChemicalElement(props: any) {
  const { filteredElement } = props;
  return (
    <>
      <p>{filteredElement.name.toUpperCase()}</p>
      <SingleAtomRender filteredElement={filteredElement} />
    </>
  )
}
