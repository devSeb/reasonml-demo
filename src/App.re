
[@react.component]
let make = (~title) =>
    <div className="">
        <h1 className="">{React.string(title)} </h1>
        <PlayerCard name="toto" level=2 />
         <PlayerCard name="toto" level=2 avatar="test avatar"/>
    </div>;