import React from 'react';
import {FlatList, View, Text, Image, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

class MovieList extends React.Component {
  componentDidMount() {
    console.log('this.props.State', JSON.stringify(this.props.State));
  }
  render() {
    if (this.props.State.loading) {
      return <ActivityIndicator size="large" />;
    } else if (this.props.State.error) {
      return (
        <View>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            Something went wrong
          </Text>
          <Text>{this.props.State.error}</Text>
        </View>
      );
    } else if (this.props.searchText === '' && !this.props.State.data) {
      return <Text>Please enter movie title.</Text>;
    } else if (this.props.State.data || this.props.State.data.length === 0) {
      return <Text>No results found.</Text>;
    }
    return (
      <FlatList
        data={this.props.State.data}
        // refreshing={this.state.loading}
        // onRefresh={this.init}
        style={
          {
            //   flex: 1,
          }
        }
        ref={(ref) => (this.flatList = ref)}
        // ItemSeparatorComponent={() => (
        //   <View style={{backgroundColor: 'grey', height: 1}} />
        // )}
        keyExtractor={(project) => project.imdbID}
        renderItem={({item, index}) => this.getItemView(item, index)}
        onEndReachedThreshold={0.5}
        numColumns={2}
        // onEndReached={({distanceFromEnd}) => {
        //   if (this.state.isEndOfListing) {
        //     return;
        //   }
        //   let pageNum = this.state.pageNum + 1;
        //   this.getProjects(pageNum);
        //   this.setState({pageNum});
        // }}
        ListEmptyComponent={
          <View>
            <Text>{this.state.isLoading ? 'Loading' : 'Empty'}</Text>
          </View>
        }
        ListFooterComponent={
          <View>
            {this.state.isBottomLoaderVisible === true ? (
              <View>{LoadingUtil.loader()}</View>
            ) : null}

            <View style={{padding: 15, margin: 15}}>
              <Text label={''} />
            </View>
          </View>
        }
      />
    );
  }

  getItemView = (item, index) => {
    let {Poster, Title, Type, Year} = item;
    if (Poster === 'N/A') {
      Poster = undefined;
    }
    return (
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
          borderWidth: 0.5,
          width: '50%',
        }}>
        <Text>{Title}</Text>
        <Image source={{uri: Poster}} style={{height: 100, width: '100%'}} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>{Type}</Text>
          <Text style={{flex: 1}}>{Year}</Text>
        </View>
      </View>
    );
  };
}

export default MovieList;
