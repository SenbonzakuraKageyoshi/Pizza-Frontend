interface WorkingHours{
    fisrtHours: string;
    secondHours: string;
}

const WorkingHours = ({ fisrtHours, secondHours }: WorkingHours) => {
  return (
    <div className="workingHours">
        Время работы: с {fisrtHours} до {secondHours}
    </div>
  )
}

export default WorkingHours