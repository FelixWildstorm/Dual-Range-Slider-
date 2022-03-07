import React, { Component } from "react";
import { render } from "react-dom";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { Container, Row, Col } from "reactstrap";
import { SliderRail, Handle, Track } from "./components/Slider";
import Feature from "./components/Feature";
//import Result from "./components/Result"; After the user select the Age Range
// will have to add the values to the form, and store the information in the db.


const sliderStyle = {
  position: "relative",
  width: "100%"
};

const domain = [0, 100];
const defaultValues = [35, 65];

class App extends Component {
  constructor(props) {
    super(props);

    const intialValues = defaultValues;

    this.state = {
        domain: domain,
        values: [intialValues]
    };
  }

  onChange = values => {
    this.setState({ values });
  };

  render() {
    const { domain, values } = this.state;

    return (
      <div style={{ margin: "10%", height: 120, width: "80%" }}>
       <Feature />
       <Container>
        <Slider
          title="Dual Range Slider"
          mode={1}
          step={5}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={defaultValues}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
        </Container>
        <Container>
        <Row>
              <Col lg={7}>
                <div className="mt-5">
                  <p className="float-start">
                      Current Age: {values.join(" \r\n Planned Retirement Age: ")}
                  </p>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
