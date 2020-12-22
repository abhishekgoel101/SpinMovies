import React from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MovieList from '../../component/MovieList';
import * as action from './redux/action';
import * as shortlistAction from '../Shortlist/redux/action';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{flexDirection: 'row',marginBottom:16}}>
          <TextInput
            style={{borderWidth: 1, height: 40, flex: 4, paddingStart: 10}}
            placeholder={'Search movies (Atleast 2 characters)'}
            onChangeText={(searchText) => this.setState({searchText})}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.action.getMovies(this.state.searchText);
            }}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <MovieList
          State={this.props.State}
          shortlist={true}
          addToShortlist={(item)=>{
            this.props.shortlistAction.addToShortlist(item);
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  State: state.searchReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(action, dispatch),
    shortlistAction:bindActionCreators(shortlistAction,dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
