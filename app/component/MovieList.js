import React from 'react';
import {FlatList, View, Text, Image, ActivityIndicator, TouchableOpacity,StyleSheet,} from 'react-native';
import * as imageUrls from "../res/images/imageUrls"

class MovieList extends React.Component {
  componentDidMount() {
  }
  render() {
    if (this.props.State.loading) {
      return <ActivityIndicator size="large" />;
    } else if (this.props.State.error) {
      return (
          <Text style={styles.errorHeading}>
            {this.props.State.error}
          </Text>
      );
    } else if (!this.props.State.data || this.props.State.data.length === 0) {
      return <Text  style={styles.errorHeading}>No results found.</Text>;
    }
    return (
      <FlatList
        data={this.props.State.data}
        ref={(ref) => (this.flatList = ref)}
        keyExtractor={(project) => project.imdbID}
        renderItem={({item, index}) => this.getItemView(item, index)}
        onEndReachedThreshold={0.5}
        numColumns={2}
        style={{marginBottom:100}}
      />
    );
  }

  getItemView = (item, index) => {
    let {Poster, Title, Year} = item;
    if (Poster === 'N/A') {
      Poster = imageUrls.DEFAULT_MOVIE_IMAGE;
    }
    return (
      <View
        style={styles.itemMain}>
          <View style={{flex:1}}>
            <Text style={styles.title} numberOfLines={2} >{Title}</Text>
            <View style={styles.flexRow,{flex:1}}>
              <Image source={{uri: Poster}} style={styles.image} />
            </View>
            
          </View>
          <View >
            <Text>Year:{Year}</Text>
            {this.props.shortlist?
                <TouchableOpacity onPress={()=>{
                    this.props.addToShortlist(item);
                }}>
                  <View style={styles.shortlistButton}>
                    <Text>
                      Shortlist
                    </Text>
                  </View>
                  
                </TouchableOpacity>  
            :null}
                
       </View>

      </View>
    );
  };
}
const styles = StyleSheet.create({
  errorHeading: {
    fontSize: 20,
    fontWeight: '700'
  },
  itemMain: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor:"black",
    justifyContent:"space-between",
  },
  shortlistButton:{
    backgroundColor:"purple",
    paddingHorizontal:8,
    paddingVertical:4
  },
  title:{
    flex:4,
    marginBottom:4
  },
  flexRow:{
    flexDirection:'row'
  },
  image:{
    height: 100,
     width: '100%'
    }


});
export default MovieList;
