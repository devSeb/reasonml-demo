[@react.component]
let make =(~avatar: option(string)=?, ~name, ~level) => {
    let ( editMode, setEditMode) = React.useState(()=> false);
    <div>
        <div>
            {
                let avatarTest = 
                switch avatar {
                | Some(url) => url
                | None => "coucou"
                };
                <span>{ React.string( avatarTest )}</span>
            }
        </div>
        <span>{ React.string( "A player " ++ name)}</span>
        <span>{ React.string( "a level  " ++ level->string_of_int)}</span>
        {editMode
            ? <span onClick={_evt => setEditMode(_ => true)}>{ React.string( "editmode  ")}</span>
            : <span>{ React.string( "pas de editmode  ")}</span>
        }
    </div>;    
}