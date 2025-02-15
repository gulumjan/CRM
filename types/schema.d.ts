
interface iCreatePatient {
    patient: {
        fio: string
        gender: string
        blood_type: string
        birthday: string
        inn: string
        password: string
        phone_number: string
        dop_phone_number: string
      }
      doctor: {
        first_name: string
        last_name: string
        phone_number: string
      }
      department: {
        department_name: string
        floor: number
        cabinet: number
      }
      comment: string
      queue_status: string
      vaccination: boolean
      date_time: string
      end_time: string
      status_appointment: string
      payment: boolean
    }


interface IReceptionLogin {
  username: string;
  email: string;
  password: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  role: string;
}

