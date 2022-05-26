import "./App.css";
import { Admin, ListGuesser, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import { StudentsList } from "./components/admin/StudentsList";
import { StudentCreate } from "./components/admin/StudentCreate";
import { StudentEdit } from "./components/admin/StudentEdit";
import Person from "@mui/icons-material/Person";

function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="students" list={StudentsList} create={StudentCreate} edit={StudentEdit} icon={Person} />
            
        </Admin>
    );
}

export default App;
