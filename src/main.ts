// Utility types

// partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => {
    return {...assign, ...propsToUpdate}
}

// Required and Readonly

const recordAssignment = (
    assign: Required<Assignment> //all props are required now
): Assignment => {
    // send to db
    return assign;
}
const assignGraded: Assignment = {
    studentId: 'drohekreho3536',
    title: 'some title',
    grade: 88,
}
    
const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true
}

// assignVerified.grade = 90;
recordAssignment({
    ...assignGraded,
    verified: true
})

// Record type

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = 'Sara' | 'Kelly'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'B',
    Kelly: 'U'
}

interface Grades {
    assign1: number,
    assign2: number,
}

const Grades: Record<Students, Grades> = {
    Sara: { assign1: 87, assign2: 89 },
    Kelly: { assign1: 76, assign2: 15 },
} 

// Pick and Omit
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssignResult = {
    studentId: 'k123',
    grade: 85,
}

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
    studentId: 'k123',
    title: 'Final Project',
}

// Exclude and Extract 
type ajustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, 'A' | 'B'>

// Nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>;

// Return type
// type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ['generics', 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise 
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))