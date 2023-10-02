<template>
  <div class="blog-container">
    <div v-for="(blog, index) in blogs" :key="index" class="blog-item">
      <h3>{{ blog.title }}</h3>
      <p>{{ blog.description }}</p>
      <!-- Display buttons if islogin is true -->
      <div v-if="islogin" class="button-container">
        <button @click="editBlog(index)">Edit</button>
        <button @click="deleteBlog(blog._id)">Delete</button>
      </div>

      <!-- Edit form (hidden by default) -->
      <form v-if="blog.editing" @submit.prevent="saveEdit(index)">
        <input v-model="blog.editTitle" />
        <textarea v-model="blog.editDescription"></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
    <div class="add-button-container">
      <button v-if="islogin" @click="addBlog" class="add-button">Add Blog</button>
    </div>
  </div>
</template>

<script>
import { isLogin } from './auth/store';
import { computed, ref, onMounted } from "vue";

const apiUrl = "http://localhost:3000/api/blogs";

export default {
  computed: {
    islogin() {
      // Assuming you have a way to check if the user is logged in
      return isLogin.value;
    },
  },
  setup() {
    const blogs = ref([]);

    const fetchBlogs = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const jsonData = await response.json();
          // Add editing properties to each blog object
          blogs.value = jsonData.map((blog) => ({
            ...blog,
            editing: false,
            editTitle: blog.title,
            editDescription: blog.description,
          }));
        } else {
          console.error("Error fetching blog data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    const addBlog = async () => {
      const newBlog = { title: "New Blog", description: "Description" };
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBlog),
        });
        if (response.ok) {
          console.log("Blog added successfully");
          fetchBlogs();
        } else {
          console.error("Error adding blog:", response.statusText);
        }
      } catch (error) {
        console.error("Error adding blog:", error);
      }
    };

    const editBlog = (index) => {
      const blog = blogs.value[index];
      blog.editing = true;
    };

    const saveEdit = async (index) => {
      const blog = blogs.value[index];
      const editedBlog = {
        title: blog.editTitle,
        description: blog.editDescription,
      };
      const blogId = blog._id; // Assuming you have an "_id" property in your MongoDB documents

      try {
        const response = await fetch(`${apiUrl}/${blogId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedBlog),
        });
        if (response.ok) {
          console.log("Blog updated successfully");
          blog.editing = false; // Clear the edit mode
          fetchBlogs();
        } else {
          console.error("Error updating blog:", response.statusText);
        }
      } catch (error) {
        console.error("Error updating blog:", error);
      }
    };

    const deleteBlog = async (id) => {
      try {
        const response = await fetch(`${apiUrl}/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          console.log("Blog deleted successfully");
          fetchBlogs();
        } else {
          console.error("Error deleting blog:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    };

    onMounted(() => {
      fetchBlogs();
    });

    return {
      blogs,
      addBlog,
      editBlog,
      saveEdit,
      deleteBlog,
    };
  },
};
</script>



<style scoped>
/* Container for the entire blog page */
.blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Individual blog item styling */
.blog-item {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 1rem; 
  margin: 1rem 0;
  border-radius: 5px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); 
}

/* Button container for Edit and Delete buttons */
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem; 
}

/* Edit form styling */
form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  margin-bottom: 1rem; 
  padding: 0.3125rem; 
  border: 1px solid #ccc;
  border-radius: 0.1875rem; 
}

/* Add and Save buttons styling */
button {
  background-color: #3498db;
  color: #fff;
  padding: 0.3125rem 0.625rem; 
  border: none;
  border-radius: 0.1875rem;
  font-size: 0.875rem; 
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

.add-button {
  background-color: #27ae60;
  width: 9.375rem; 
  align-self: flex-end;
}

.add-button:hover {
  background-color: #219d54;
}

/* Add margin to the bottom of the page */
.add-button-container {
  margin-bottom: 1.25rem; 
}
</style>