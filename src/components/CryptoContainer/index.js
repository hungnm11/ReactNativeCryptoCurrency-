import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _fetchData } from '../../actions';
import CoinCard from '../CoinCard';

class CryptoContainer extends Component {

  componentDidMount() {
    this.props._fetchData();
  }

  renderCoinCard() {
    const { crypto } = this.props;
    return crypto.data.map((coin, index) => {
      return <CoinCard 
        key={index}
        symbol={coin.symbol}
      />
    });
  }

  render() {
    console.log(this.props);
    return (
      <View>
        {this.renderCoinCard()}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ _fetchData }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer);