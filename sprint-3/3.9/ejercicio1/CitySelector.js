import React, {Component} from "react";

class CitySelector extends Component {
  render() {
    return (
        <div>
            <select name="" id="" onChange={this.props.action}>
              <option value="https://www.telesurtv.net/__export/1530748387221/sites/telesur/img/multimedia/2018/07/04/1n.jpg">Mérida</option>
              <option value="https://media-cdn.tripadvisor.com/media/photo-s/01/35/e8/79/henri-pittier-national.jpg">Maracay</option>
              <option value="https://media2.trover.com/T/5991b6293b5a051060014e36/fixedw_large_4x.jpg">Margarita</option>
            </select>
        </div>
    );
  }
}

export default CitySelector;