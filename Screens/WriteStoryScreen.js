import  React from 'react';
import {TextInput,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,ToastAndroid,Text} from 'react-native';
import {Header} from 'react-native-elements';



SubmitStory=async()=>{
    ToastAndroid.show("Your Story has been submitted",ToastAndroid.SHORT)
  }


export default class WriteStoryScreen extends React.Component{
    render(){
        return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header
                    backgroundColor={"pink"}
                    centerComponent={{
                        text :'Story Hub-1',
                        style:{
                            color :'red',
                            fontSize:22,
                            fontStyle:'italic',
                        }
                    }}
                />
                <TextInput
                placeholder="Title Of Story"
                />
                <TextInput
                placeholder="Author Of Story"
                />
                <TextInput
                placeholder="writeStory"
                />

            <TouchableOpacity style={styles.button} 
            onPress={this.SubmitStory} 
            >

                <Text>Submit</Text>
            </TouchableOpacity>

            </KeyboardAvoidingView>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button :{
        backgroundColor:'pink',
        alignItems:'center',
        alignSelf:'center'
    }
    
  });
