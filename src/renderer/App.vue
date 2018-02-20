<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  created () {
    Vue.http.interceptors.push((request, next) => {
      next(response => {
        this.handleResponse(response)
        return response
      })
    })
  },
  methods: {
    handleResponse (response) {
      this.$store.dispatch('deleteAlert')
      if (response.status >= 400) {
        if (response.status === 401) {
          this.handleUnauthorized()
        } else if (response.status === 403) {
          this.handleForbidden()
        } else {
          this.handleServerError(response)
        }
      } else {
        if (response.data.status !== 0) {
          this.handleApiError(response)
        }
      }
    },
    /**
		 * @param response
		 */
    handleServerError (response) {
      this._showAlert(response.statusText)
    },
    /**
		 */
    handleUnauthorized () {
      this.$router.replace({ name: 'login' })
    },
    /**
		 * @param response
		 */
    handleForbidden (response) {
      this._showAlert(response.data.message)
    },
    /**
		 * @param response
		 */
    handleApiError (response) {
      this._showAlert(response.data.message)
    },
    /**
		 * @param message
		 * @private
		 */
    _showAlert (message) {
      this.$store.dispatch('createAlert', { type: 'warning', message: message })
    }
  }
}
</script>