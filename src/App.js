import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {

  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  Image,
  Card
} from "@aws-amplify/ui-react";

function App({signOut}) {
  return (
    <View className="App">
      <Card>
      <Heading> Hello from V2</Heading>
      </Card>
      <Button onClick={signOut}> Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
