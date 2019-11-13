import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../../../components/Layout/Layout';
import {homePageRequest} from '../../../actions/HomeActions';
class Home extends Component {
  componentDidMount(){
    const { homePageRequest } = this.props.actions;
    homePageRequest();
  }
    render() {
      console.log('Store Data', this.props);
      return (
        <Layout>
          <h1>Hello Home</h1>
        </Layout>
      );
    }
  }

function mapStateToProps({homeReducer}) {
    return {
        auditContainerData: homeReducer,
    };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators((Object.assign({
    homePageRequest,
  })),
  dispatch,
  ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
