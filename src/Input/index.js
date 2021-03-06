Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        placeholder: {
            type: String,
            value: ''
        },
        label: {
            type: String,
            value: ''
        },
        number: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        value: {
            type: String,
            value: ''
        },
        radius: {
            type: Boolean,
            value: false
        },
        borderColor: {
            type: String,
            value: false
        },
        lengthLimit: {
            type: Number,
            value: 0
        },
        password: {
            type: Boolean,
            value: false
        },
        confirmType: {
            type: String,
            value: 'done'
        },
        focus: {
            type: Boolean,
            value: false
        },
        type: {
            type: String,
            value: "text"
        },
        placeholderClass: {
            type: String,
            value: ""
        },
        placeholderStyle: {
            type: String,
            value: ""
        }
    },
    ready() {
        let getInputLength = () => (this.properties.value ? this.properties.value.length : 0);
        this.setData({
            inputLength : getInputLength()
        })
    },
    methods: {
        handleInputEvent($evt) {
            this.setData({
                inputLength: $evt.detail.value.length
            })
            this.triggerEvent('change', $evt)
        },
        handleFocusEvent($evt) {
            this.triggerEvent('focus', $evt)
        },
        handleBlurEvent($evt) {
            this.triggerEvent('blur', $evt)
        }
    }
})