import {z} from "zod"

export const StudentSchema = z.object({
    name: z.string().toUpperCase().optional(),
    rollno: z.string().toUpperCase().optional(),
    rank: z.coerce.number().nonnegative().default(0).optional(),
    fathername: z.string().toUpperCase().optional(),
    mothername: z.string().toUpperCase().optional(),
    aadharno: z.string().toUpperCase().optional(),
    dob: z.string().toUpperCase().optional(),
    gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(),
    medium: z.enum(["ENGLISH", "HINDI", "TELUGU", "OTHER"]).optional(),
    intermarks: z.coerce.number().gte(0).optional(),
    sscmarks: z.coerce.number().gte(0).optional(),
    fatherno: z.coerce.number().max(9999999999).min(1000000000).optional(),
    motherno: z.coerce.number().max(9999999999).min(1000000000).optional(),
    stdno: z.coerce.number().max(9999999999).min(1000000000).optional(),
    caste: z.enum(["OC", "SC", "ST", "BC", "BC_A","BC_B","BC_C","BC_D","BC_E", "OTHER"]).optional(),
    religion: z.string().toUpperCase().optional(),
    stdAdim: z.enum(["CONVENER", "MANAGEMENT","CON","MGT.","SPOT"]).optional(),
    pressadd: z.string().toUpperCase().nonempty().optional(),
    permadd: z.string().toUpperCase().nonempty().optional(),
    stdmail: z.string().toUpperCase().email().optional(),
    fathermail: z.string().toUpperCase().email().optional(),
    mothermail: z.string().toUpperCase().email().optional(),
  });

  export const MentorSchema = z.object({
   name : z.string().toUpperCase().optional(),
   desg : z.string().toUpperCase().optional(),
   phono : z.coerce.number().max(9999999999).min(1000000000).optional(),
   mailid : z.string().email().toUpperCase().optional(),
   sec : z.string().optional(),
   stdcnt : z.coerce.number().optional()
  });

  export type STUDENTPARAMS = {
    id : STUDENTTYPE["rollno"]
  }
  export type MENTORPARAMS = {
    id : MENTORTYPE["mailid"]
  }
  
  export type STUDENTTYPE = z.infer<typeof StudentSchema>
  export type MENTORTYPE = z.infer<typeof MentorSchema>