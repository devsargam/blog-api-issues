const users = [];

class UserService {
  static async createUser(userData) {
    const newUser = {
      id: users.length + 1,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      createdAt: new Date()
    };
    
    users.push(newUser);
    return newUser;
  }

  static async getUserById(userId) {
    return users.find(user => user.id == userId);
  }

  static async updateUser(userId, updateData) {
    const userIndex = users.findIndex(user => user.id === userId);
    
    if (userIndex === -1) {
      return null;
    }
    
    users[userIndex] = { ...users[userIndex], ...updateData };
    return users[userIndex];
  }

  static async deleteUser(userId) {
    const index = users.findIndex(user => user.id === parseInt(userId));
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false
  }

  static async getAllUsers() {
    return users;
  }

  static async authenticate(email, password) {
    const user = users.find(u => u.email === email);
    
    if (user && user.password === password) { //12346 -> integer //"123456" -> String
      return { success: true, user };
    }
    
    return { success: false };
  }
}

module.exports = UserService;