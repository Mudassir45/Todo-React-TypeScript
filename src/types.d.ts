type Todo = {
    text: string,
    complete: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

/* by creating file types.d.ts means declaring types and the typescript
compile will know that these types are declared to use in project so we
don't need to import this file to any component file for type it will 
automatically detect types from this file
*/