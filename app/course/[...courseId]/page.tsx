export default function Course({params}: Readonly<{ params: { courseId: string; }; }>) {
    
    return (
        <div>
            <h1>Course {JSON.stringify(params.courseId)}</h1>
        </div>
    );
}