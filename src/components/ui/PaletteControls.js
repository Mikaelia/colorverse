import React from "react";
import PaletteList from "./PaletteList";
import Dropdown from "./Dropdown";

const PaletteControls = ({
  showControls = false,
  newPalette = {},
  palettes = [],
  colors = [],
  onNewPalette = f => f,
  onAddPaletteColors = f => f
}) => {
  let _name;

  // Returns list of currently selected colors
  const getSelectedColors = colors => {
    return colors.reduce((palette, color) => {
      return color.selected ? palette.concat(color) : palette;
    }, []);
  };

  // Adds new palette
  const handleNewPalette = e => {
    e.preventDefault();
    const newPaletteColors = getSelectedColors(colors);
    const newPalette = { name: _name.value, colors: newPaletteColors };
    onNewPalette(newPalette);
  };

  const handleUpdatePalette = () => {
    //get ref from dropdown to get selected palletName
    //TODO: make dropdown which fills with pallet names
    // const newPallet = getSelectedColors(colors);
    // onAddPalletColors(name, newPallet)
  };

  console.log({ showControls });
  return (
    <div className={showControls ? "palette-controls u-mb-md" : "hidden"}>
      <div className="palette-controls__new-palette">
        <h2 className="heading-sm u-mb-sm fw-med">Add New Palette</h2>
        <form className="new-palette-form" onSubmit={handleNewPalette}>
          <input
            placeholder="Palette Name"
            type="text"
            ref={input => (_name = input)}
            className="palette-name u-mb-sm"
          />
          <button className="palette-controls__button u-mb-md">Submit</button>
        </form>
      </div>
      <div className="palette-controls__update-palette">
        <h2 className="heading-sm fw-med u-mb-sm">
          Add Color(s) to Saved Pallet
        </h2>

        <Dropdown title="My Palettes" palettes={palettes} />
        <button
          className="palette-controls__button u-mt-sm"
          onSubmit={(palette, colors) => handleUpdatePalette(palette, colors)}
        >
          Update Palette
        </button>
      </div>

      <div className="palette-controls__palette-view hidden">
        <h2 className="heading-sm fw-med">View Saved Pallets</h2>
        <PaletteList palettes={palettes} />
      </div>
    </div>
  );
};

export default PaletteControls;