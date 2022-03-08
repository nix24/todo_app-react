
import { List, ListItem, ListItemText } from '@mui/material';
import './Todo.css';

function Todo(props) {
    return (
        <div className="todo-list">
            <List>
                <ListItem>

                    <ListItemText
                        primary="Task" />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={props.todo} />
                </ListItem>
            </List>
        </div>
    )
}

export default Todo