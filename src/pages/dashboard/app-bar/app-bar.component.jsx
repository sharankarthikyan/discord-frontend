// styles
import { AppBarContainer } from "./app-bar.styles";

// components
import DropDownMenu from "./dropdown-menu/dropdown-menu.component";
import ChosenOptionLabel from "./chosen-option-label/chosen-option-label.component";

const AppBar = () => {
  return (
    <AppBarContainer>
      <ChosenOptionLabel />
      <DropDownMenu />
    </AppBarContainer>
  );
};

export default AppBar;
