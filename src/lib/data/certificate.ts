export function generateCertificateData(courseId: string, userId: string) {
  return {
    userName: 'John Doe',
    courseTitle: 'JavaScript Fundamentals',
    issueDate: new Date().toLocaleDateString(),
    certificateId: `${courseId}-${userId}`,
  };
}
