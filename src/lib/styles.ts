interface ActionReturnValue {
    update?: (parameters: never) => void,
    destroy?: () => void
}

export function styles(node: HTMLElement, styles: Record<string, string>): ActionReturnValue {
    setCustomProperties(node, styles)

    return {
        update(styles) {
            setCustomProperties(node, styles)
        }
    };
}

function setCustomProperties(node: HTMLElement, styles: Record<string, string>): void {
    Object.entries(styles).forEach(([key, value]) => {
        node.style.setProperty(`--${key}`, value)
    })
}