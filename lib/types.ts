export interface FamilyRelationship {
  value: string
  label: string
}

export const FAMILY_RELATIONSHIPS: FamilyRelationship[] = [
  { value: "parent", label: "Parent" },
  { value: "spouse", label: "Spouse" },
  { value: "child", label: "Child" },
  { value: "sibling", label: "Sibling" },
  { value: "grandparent", label: "Grandparent" },
  { value: "grandchild", label: "Grandchild" },
  { value: "aunt_uncle", label: "Aunt/Uncle" },
  { value: "cousin", label: "Cousin" },
  { value: "in_law", label: "In-law" },
  { value: "mosque_member", label: "Mosque Member" },
  { value: "community_member", label: "Community Member" },
]

export interface SignUpFormData {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  phoneNumber: string
  agreeToTerms: boolean
  agreeToPrivacy: boolean
}
