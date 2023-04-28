export const registerPanelSize = (panelId: string, value: number) => async (dispatch: any) => {
  const dimentionScopes: { [key: string]: string } = {
    A: 'REGISTER_PANEL_WIDTH',
    B: 'REGISTER_PANEL_WIDTH',
    C: 'REGISTER_PANEL_WIDTH',
    D: 'REGISTER_PANEL_WIDTH',
    E: 'REGISTER_PANEL_WIDTH',
    HEIGHTS_A_B_C: 'REGISTER_PANEL_HEIGHTS_A_B_C',
    HEIGHT_D: 'REGISTER_PANEL_HEIGHT_D',
    HEIGHT_E: 'REGISTER_PANEL_HEIGHT_E',
  }
  dispatch({ type: dimentionScopes[panelId], panelId, value });
};