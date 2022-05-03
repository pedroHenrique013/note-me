import { SideBarContainer, SideBarContent } from "./styles";

export function Sidebar({ addNotes }) {
  return (
    <SideBarContainer>
      <SideBarContent>
        <div className="img-logo"></div>
        <button onClick={addNotes}>
          <div className="add-note"></div>
        </button>
      </SideBarContent>
    </SideBarContainer>
  );
}
