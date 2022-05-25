import "./App.css";
import { Admin, ListGuesser, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import { StudentCreate, StudentEdit, StudentsList } from "./students";
import Person from "@mui/icons-material/Person";

function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="students" list={StudentsList} create={StudentCreate} edit={StudentEdit} icon={Person} />
            {/* <Resource name="students" list={ListGuesser} icon={Person} /> */}
        </Admin>
    );
}

export default App;
