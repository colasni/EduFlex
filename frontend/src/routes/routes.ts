import Home from '../pages/Home';
import AddCourse from '../pages/AddCourse';
//import RecipeDetails from '../pages/RecipeDetails';
import Favorites from '../pages/Courses';
import RegisterUser from '../pages/AddUser';
import UsersList from '../pages/UsersList';

interface Route{
    path: string;
    component: React.FC;
}

const routes: Route[] = [
    { path: '/', component: Home},
    { path: '/add-course', component: AddCourse},
//    { path: '/recipe/:id', component: RecipeDetails},
    { path: '/courses', component: Favorites },
    { path: '/add-users', component: RegisterUser},
    { path: '/users', component: UsersList}
];

export default routes;