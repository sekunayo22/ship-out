export type Allocation = {
    id: number
    serviceString: string
    voyage: string
    vessel: string
    linkedScheduleEtd: string
    linkedScheduleEta: string
    quantity: number
    unit: string
    utilization: number
    outstandingCommitted: number
    etdWeek: number
}