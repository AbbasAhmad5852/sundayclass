import List_datashow from "./sundayclass"

function Mylist(){

    let person_name = "Tahir Khan"
    let classwork = "studying in reactjs class"
    return(

        <>
        <h1>{person_name}</h1>
        <h1>{classwork}</h1>
        {/* <p>{sum(2,2)}</p> */}
        {/* <p>{msg("hellow world")}</p> */}
        <List_datashow/>
       
        </>

    )
}
export default Mylist
// function sum(num1,num2){
//    let  result= num1+num2
//     alert(result); 
// }
// function msg(mymsg){
// return mymsg
 
// }
// export default function Avatar() {
//     return (
//         <>
//          <h1>person_name</h1>
//          <h1>classwork</h1>
//     )
//       <img
//         className="avatar"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxx3UR4mtoJtKb6mzrqSoC3dOWqsic84jjSaqX9TLdw&s"
//         alt="Gregorio Y. Zara"
//         />
//         </>
//     );
//   }
//   function Avatar() {
//     return (
//       <img
//         className="avatar"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxx3UR4mtoJtKb6mzrqSoC3dOWqsic84jjSaqX9TLdw&s"
//         alt="Lin Lanying"
//         width={100}
//         height={100}
//       />
//     );
//   }
  
//   export default function Profile() {
//     return (
//       <Avatar />
//     );
//   }