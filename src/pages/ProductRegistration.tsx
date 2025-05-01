
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
import { Package } from 'lucide-react';

const ProductRegistration: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: File[] = Array.from(files);
    setImages((prev) => [...prev, ...newImages]);

    // Create preview URLs
    const newPreviewUrls = Array.from(files).map(file => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    const newPreviewUrls = [...previewUrls];
    
    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(newPreviewUrls[index]);
    
    newImages.splice(index, 1);
    newPreviewUrls.splice(index, 1);
    
    setImages(newImages);
    setPreviewUrls(newPreviewUrls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation of product registration
    setTimeout(() => {
      console.log({
        productName,
        price: parseFloat(price),
        description,
        category,
        stock: parseInt(stock, 10),
        images
      });

      toast.success('Produto cadastrado com sucesso!');
      setIsLoading(false);
      
      // Reset form
      setProductName('');
      setPrice('');
      setDescription('');
      setCategory('');
      setStock('');
      setImages([]);
      setPreviewUrls([]);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Cadastrar Novo Produto | Kair</title>
        <meta name="description" content="Cadastre seus produtos artesanais para venda na plataforma Kair." />
      </Helmet>
      
      <Layout>
        <div className="container mx-auto py-10 px-4">
          <div className="flex items-center gap-3 mb-8">
            <Package className="h-8 w-8 text-kair-purple" />
            <h1 className="text-3xl font-display font-bold">Cadastrar Novo Produto</h1>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-medium">Detalhes do Produto</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="productName">Nome do Produto</Label>
                    <Input 
                      id="productName" 
                      value={productName} 
                      onChange={(e) => setProductName(e.target.value)} 
                      placeholder="Ex: Vaso de Cerâmica Feito à Mão"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Preço (R$)</Label>
                      <Input 
                        id="price" 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        placeholder="0.00"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="stock">Estoque</Label>
                      <Input 
                        id="stock" 
                        type="number" 
                        min="1" 
                        step="1" 
                        value={stock} 
                        onChange={(e) => setStock(e.target.value)} 
                        placeholder="0"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Categoria</Label>
                    <Select value={category} onValueChange={setCategory} required>
                      <SelectTrigger id="category" className="mt-1">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ceramica">Cerâmica</SelectItem>
                        <SelectItem value="macrame">Macramê</SelectItem>
                        <SelectItem value="croche">Crochê</SelectItem>
                        <SelectItem value="costura">Costura</SelectItem>
                        <SelectItem value="madeira">Madeira</SelectItem>
                        <SelectItem value="joias">Joias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea 
                      id="description" 
                      value={description} 
                      onChange={(e) => setDescription(e.target.value)} 
                      placeholder="Descreva seu produto, incluindo materiais, dimensões e outras informações importantes."
                      className="min-h-[120px] mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="images">Imagens do Produto</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        id="images"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="images"
                        className="cursor-pointer text-kair-purple hover:text-kair-purple-dark flex flex-col items-center"
                      >
                        <span className="text-sm mb-2">Clique para adicionar imagens</span>
                        <Button type="button" variant="outline" className="mb-4">
                          Escolher Arquivos
                        </Button>
                      </label>
                      
                      {previewUrls.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          {previewUrls.map((url, index) => (
                            <div key={index} className="relative">
                              <img
                                src={url}
                                alt={`Preview ${index}`}
                                className="w-full h-32 object-cover rounded-md"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-white text-red-500 rounded-full p-1 shadow-md"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-kair-purple hover:bg-kair-purple-dark" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Cadastrando...' : 'Cadastrar Produto'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Layout>
    </>
  );
};

export default ProductRegistration;
