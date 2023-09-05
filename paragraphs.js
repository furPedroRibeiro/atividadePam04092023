import { Text, View, StyleSheet} from 'react-native';

export {ParagraphA, ParagraphB, ParagraphC};

function ParagraphA(){
    return(
        <View style={styles.viewParagraphA}>
            <Text style={styles.paragraphA}>Abstração</Text>
            <Text style={styles.paragraphA}>Esse conceito nos orienta a construir códigos que sejam relacionados com objetos da nossa vida real. Classes são os modelos ou moldes nos quais surgirão os objetos. As classes definem algumas propriedades e métodos que deverão fazer parte do objeto que derivar dela ou então, como dizemos, os objetos que serão instanciados a partir dela.</Text>
        </View>
    );
}
function ParagraphB(){
    return(
        <View style={styles.viewParagraphB}>
            <Text style={styles.paragraphB}>Herança</Text>
            <Text style={styles.paragraphB}>Como o próprio nome diz, trata-se de uma relação de receber algo pré-existente. No caso da POO, a herança é um evento que ocorre entre classes. A doadora é chamada de classe-mãe. Já a classe que herda é chamada de filha.</Text>
        </View>
    );
}
function ParagraphC(){
    return(
        <View style={styles.viewParagraphC}>
            <Text style={styles.paragraphC}>Encapsulamento</Text>
            <Text style={styles.paragraphC}>A ideia principal é representar um objeto de forma abstrata, que seja obrigatoriamente herdado por outras classes.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
      paragraphA: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#151515',
        textAlign: 'justify',
      },
      paragraphB: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'justify',
      },
      paragraphC: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#DBC96C',
        textAlign: 'justify',
      },
      viewParagraphA:{
        backgroundColor: '#DBC96C',
    
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 15,
    
        width: '70%',
        height: 'auto',
    
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 15,
      },
      viewParagraphB:{
        backgroundColor: '#D9D9D9',
    
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 15,
    
        width: '70%',
        height: 'auto',
    
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 15,
      },
      viewParagraphC:{
        backgroundColor: '#151515',
    
        borderWidth: 1,
        borderColor: '#DBC96C',
        borderRadius: 15,
    
        width: '70%',
        height: 'auto',
    
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 15,
      },
    });