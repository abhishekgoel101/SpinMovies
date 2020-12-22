import React from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MovieList from '../../component/MovieList';
import * as action from './redux/action';

class Shortlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  componentDidMount() {
  }
  render() {
    let State={...this.props.State};
    State.data=Object.values(State.data);
    return (
      <SafeAreaView>
        <View style={{marginBottom:16}}>
          <Text style={styles.shortlistedMovies} >Shortlisted Movies</Text>
        </View>
        <MovieList
          State={State}
          shortlist={false}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  State: state.shortlistReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(action, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shortlist);

const styles = StyleSheet.create({
  shortlistedMovies: {
  fontSize: 24, 
  fontWeight: '700'
  },

});
