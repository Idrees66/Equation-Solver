import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component{

  state={
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    A: null,
    B:null,
  }

  Solve=()=>{
    // Cramer's Rule
    const {a,b,c,d,e,f}= this.state;
    var az = parseInt(this.state.a)
    var bz = parseInt(this.state.b)
    var cz = parseInt(this.state.c)
    var dz = parseInt(this.state.d)
    var ez = parseInt(this.state.e)
    var fz = parseInt(this.state.f)

    var det = (az*ez)-(bz*dz);

    var xdet = (cz*ez)-(bz*fz);
    var ydet = (az*fz)-(dz*cz);
    // var s= az*bz;
    var xv = xdet/det;
    var yv = ydet/det;
    var xvv = xv.toString();
    var yvv = yv.toString();

    this.setState({A: xvv, B: yvv})
    // var ss= det.toString();
    // this.setState({A: ss })
    //   console.log("Solve",this.state.A)

  }

  render(){
  return (
    <View style={styles.container}>
        <View  style={styles.header}>
          <Text style={styles.title}>Equation Solver</Text>
        </View>
        <View  style={styles.footer}>

          <View style={{flexDirection:'row', marginBottom:10 }}>

            <TextInput placeholder="" style={styles.input}  keyboardType="numeric" onChangeText={(text)=>this.setState({a:text})}  />
            <Text style={styles.text}  >x +</Text>
            <TextInput placeholder="" style={styles.input} keyboardType="numeric"  onChangeText={(text)=>this.setState({b:text})}   />
            <Text style={styles.text}  >Y   =</Text>
            <TextInput placeholder="" style={styles.input} keyboardType="numeric"  onChangeText={(text)=>this.setState({c:text})}   />
          </View>
          <View style={{flexDirection:'row', }}>
            <TextInput placeholder="" style={styles.input}  keyboardType="numeric"  onChangeText={(text)=>this.setState({d:text})}    />
            <Text style={styles.text}  >x +</Text>
            <TextInput placeholder="" style={styles.input} keyboardType="numeric"  onChangeText={(text)=>this.setState({e:text})}   />
            <Text style={styles.text}  >Y   =</Text>
            <TextInput placeholder="" style={styles.input} keyboardType="numeric"  onChangeText={(text)=>this.setState({f:text})}   />
          </View>
          <View style={{borderRadius:10, marginTop: 20}}>
            <Button color='rgb(235,153,25)' title="Solve" onPress={this.Solve} />
          </View>

            <View style={{marginTop:20}}>
              <View style={{flexDirection: 'row',}}>
                <Text style={styles.text}  >Value of  X is: </Text>
                <TextInput  style={styles.Xres} value={this.state.A} /> 
              </View>
              <View style={{flexDirection: 'row',}}>
                <Text style={styles.text}  >Value of  Y is: </Text>
                <TextInput  style={styles.Xres} value={this.state.B} /> 
              </View>
            </View>

        </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    flex: 1,
    backgroundColor: 'rgb(235,153,25)',
      alignItems: 'center',
      justifyContent: 'center',
  },
  footer:{
    flex: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:35,
    fontWeight:'bold',
  },
  input:{
    backgroundColor: 'rgb(235,153,25)',
    width:30,
    color:'black',
    fontWeight:'bold',
    fontSize:20,
 
  },
  text:{
    color:'white',
    fontSize:25,
    marginHorizontal:10,
    color:'rgb(235,153,25)',
    
  },
  btn:{
    // color:'rgb(235,153,25)',
    backgroundColor: 'rgb(235,153,25)',
    borderRadius:10,
    borderColor:'white',
  },
  Xres:{
    backgroundColor: 'black',
    // width:50,
    fontSize:25,
    color:'white',
    fontWeight:'bold',
  }

});
