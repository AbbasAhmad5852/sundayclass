function List_datashow(){
    let student ={

      studentId: 1122,
      student_profile: 'https://img.freepik.com/free-photo/young-woman-wearing-striped-shirt-eyeglasses_273609-13230.jpg',
      student_age:17,
      img_width: 100,
      img_height:100
    }

    return(

        <>
        <h1>Student ID:{student.studentId}</h1>
        <img src={student.student_profile} height={student.img_height} width={student.img_width}/>
        <h2> STudent Age:{student.student_age}</h2>
        <Color_List/>
        </>
    )
}
export default List_datashow;

function Color_List(){

    let mycolor = ["red","blue"];

    return(
        <>
        <h1>{mycolor[1]}</h1>
        </>
    )
}
