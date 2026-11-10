export default function Column() {
    return (
        <div className="min-h-100 grid grid-cols-1 md:grid-cols-3 mt-20 gap-2 px-2">
            <section>
                <h2>Todo</h2>
            </section>
            <section>
                <h2>Doing</h2>
            </section>
            <section>
                <h2>Done</h2>
            </section>
        </div>
    )
}