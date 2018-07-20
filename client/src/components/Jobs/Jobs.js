import React from "react";
import logo from "../img/logo.png";
import Nav from "../components/Nav"
import API from "../../util/API"


type Props = {
    navigation: any,
    theme: Theme,
  };
  
type State = {
    description: ?string,
    location: ?string,
  };
  
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
      padding: 10,
    },
    col: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    row: {
      flex: 1,
      flexDirection: 'column',
      marginBottom: 50,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    company: {
      marginTop: 10,
    },
    location: {
      marginTop: 10,
    },
    published: {
      marginTop: 15,
      fontSize: 12,
      color: Colors.grey600,
    },
    how_to_apply: {
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 20,
    },
    applyButtonWrapper: {
      position: 'absolute',
      bottom: 0,
      width: width - 8,
    },
  });

  
  
  class Jobs extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
  
      this.state = {
        description: '',
        location: '',
      };
    }
  
    render() {
      const { navigation, theme: { colors: { background } } } = this.props;
  
      return (
        <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
          <View style={styles.wrapper}>
            <View style={[styles.row, styles.logoWrapper]}>
              <Image source={Logo} />
            </View>
            <View style={styles.row}>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>
                  what
                </Text>
                <Text style={styles.labelDesc}>
                  job title, keywords, or company
                </Text>
              </View>
              <SearchBar
                onChangeText={query => this.setState({ description: query })}
                value={this.state.description}
                onIconPress={() => {}}
              />
            </View>
            <View style={styles.row}>
              <View style={styles.labelWrapper}>
                <Text style={styles.label}>
                  where
                </Text>
                <Text style={styles.labelDesc}>
                  city, province, or region
                </Text>
              </View>
              <SearchBar
                onChangeText={query => this.setState({ location: query })}
                value={this.state.location}
                onIconPress={() => {}}
                icon="location-on"
              />
            </View>
            <View style={[styles.row, { marginTop: 20 }]}>
              <Button
                raised
                primary
                onPress={() => navigation.navigate({
                  key: 'JobsList',
                  routeName: 'JobsList',
                  params: {
                    data: {
                      description: this.state.description,
                      location: this.state.location,
                    },
                  },
                })}
              >
                <Text>
                  Find Jobs
                </Text>
              </Button>
            </View>
          </View>
        </SafeAreaView>
      );
    }
  }
  
  export default withTheme(Jobs);