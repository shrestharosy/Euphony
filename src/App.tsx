import * as React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import Search from "./views/search";

interface IAppState {
  activeTab: string;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle = (tab: any) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <div className={"wrapper"}>
        <Row>
          <Col>
            <Nav tabs={true}>
              <NavItem>
                <NavLink
                  // className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Search
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  // className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Tabs
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                    <Search />
              </TabPane>
              <TabPane tabId="2">
                <div>ola</div>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
