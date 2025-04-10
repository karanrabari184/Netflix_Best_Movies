export const Practices = () => {
    const student = [];
    return (
        <>
            {/* So Basically heare is Problem is the Below First Line  */}
            {/* <p>{student.lenth && "Student Reords Not Availble"}</p> */}
            {/*<p>Number of STudents: {Student.length}</p> */}

            {/* Solution : so here is && opreator and && left side should be true then right side implement so here is method to make left side true*/}
            {/*method : 1 */}

            {/*
            <p>{student.length === 0 && "student records Not availble"}</p>
            <p>Number Of  Student : {student.length}</p>
            */}

            {/*method : 2 */}
            {/*
            <p>{!student.length && "No Students records"}</p>
            <p>Number Of  Student : {student.length}</p> 
            */}

            {/* Method 3 : so we trsfom in boolean and current condition is false so used the ' ! ' that make reverse so " True " */}

            <p>{!Boolean(student.length) && "No Students Records"}</p>
            <p>Number Of  Student : {student.length}</p>

        </>
    )
}