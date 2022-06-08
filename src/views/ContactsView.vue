<template>
    <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <header-title-component :title="headerTitle" />
            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img
                            class="beanslogo mt-5"
                            src="@/assets/logo/Beans_logo_dark.svg"
                            alt="Beans logo"
                        />

                        <form
                            action="/"
                            class="mt-5"
                            @submit.prevent="submit($event)"
                        >
                            <div class="form-group row">
                                <div
                                    class="col col-12 col-sm-3 d-flex align-items-start"
                                >
                                    <label for="name-input" class="mb-0">
                                        Name
                                        <span style="color: red">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name-input"
                                        v-model="v$.userName.$model"
                                    />
                                    <span
                                        v-for="error in v$.userName.$errors"
                                        :key="error.$uid"
                                    >
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div
                                    class="col col-12 col-sm-3 d-flex align-items-start"
                                >
                                    <label for="email-input" class="mb-0">
                                        E-mail
                                        <span style="color: red">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email-input"
                                        v-model="v$.email.$model"
                                    />
                                    <span
                                        v-for="error in v$.email.$errors"
                                        :key="error.$uid"
                                    >
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div
                                    class="col col-12 col-sm-3 d-flex align-items-start"
                                >
                                    <label for="phone-input" class="mb-0">
                                        Phone
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="phone-input"
                                        v-model="v$.phone.$model"
                                    />
                                    <span
                                        v-for="error in v$.phone.$errors"
                                        :key="error.$uid"
                                    >
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row textarea">
                                <div
                                    class="col col-12 d-flex justify-content-center"
                                >
                                    <label
                                        for="pmessage"
                                        class="mb-3 mt-3 text-center"
                                    >
                                        Your message
                                        <span style="color: red">*</span>
                                    </label>
                                </div>
                                <div class="col col-12">
                                    <textarea
                                        class="form-control"
                                        name="message"
                                        id="message"
                                        rows="5"
                                        placeholder="Leave your comments here"
                                        v-model="v$.message.$model"
                                    ></textarea>
                                    <span
                                        v-for="error in v$.message.$errors"
                                        :key="error.$uid"
                                    >
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <button
                                        class="btn btn-outline-dark send-btn"
                                        type="submit"
                                    >
                                        Send us
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import HeaderTitleComponent from '@/components/HeaderTitleComponent.vue'
import useVuelidate from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { helpers } from '@vuelidate/validators'
import { minLength } from '@/validators/minLength'

export default {
    components: { NavBarComponent, HeaderTitleComponent },
    data() {
        return {
            headerTitle: 'Contact us',
            userName: '',
            email: '',
            phone: '',
            message: '',
        }
    },
    methods: {
        async submit() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return

            const message = {
                userName: this.userName,
                email: this.email,
                phone: this.phone,
                message: this.message,
            }

            fetch('http://localhost:3000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            })
        },
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            userName: { required },
            email: { required, email },
            phone: {},
            message: {
                required,
                maxLength: maxLength(20),
                minLength: helpers.withMessage('this value min 5', minLength),
            },
        }
    },
}
</script>
