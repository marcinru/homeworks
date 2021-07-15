const array2dict = <T extends { id: number }>(array: T[]): Record<number, T> => {
    const dict = {} as Record<number, T>;

    array.forEach(item => { dict[item.id] = item; });

    return dict;
}

const dict2array = <T, K extends PropertyKey>(dict: Record<K, T>): Array<T & { id: K }> => {
    const array: Array<T & { id: K }> = [];

    for (const key in dict) {
      array.push({ ...dict[key], id: key })
    }

    return array;
}
