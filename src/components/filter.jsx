function FilterArea() {
  return (
    <div className="w-full h-10 bg-blue-950 flex items-center justify-between px-4 gap-2 md:gap-4">
      <h2 className="text-white text-sm font-bold font-mono">Filter Area</h2>
      <form className="flex items-center justify-between gap-2 md:gap-4">
        <select className="rounded-select">
          <option>Priorité</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <select className="rounded-select">
          <option>Date</option>
          <option>today</option>
          <option>this week</option>
          <option>this month</option>
        </select>
        <select className="rounded-select">
          <option>Assigné à</option>
          <option>Not Assigned</option>
        </select>
      </form>
    </div>
  )
}

export default FilterArea